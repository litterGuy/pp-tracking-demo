import base64
import json

from backend.service.notice_hook import NoticeHook
from backend.ws.connect_tracking import ProStatus


class OutputData(object):
    def __init__(self):
        self.id_set = None
        self.frame_id = None
        self.save_dir = None
        self.frame_count = None
        self.status = 0
        self.image_base64 = None


def set_default(obj):
    if isinstance(obj, set):
        return list(obj)
    raise TypeError


cacheOutputData = OutputData()


def output_notice(data):
    """
    记录每一帧输的数据
    :param data:
    :return:
    """
    # my_open = open('output/id_set.txt', 'a')
    # my_open.write(json.dumps(data.__dict__, default=set_default) + '\n')
    # my_open.close()

    global cacheOutputData
    if cacheOutputData.frame_id is None:
        data.status = 0
        # 读取本地图片，转成base64
        pic = open(data.save_dir, 'rb')
        pic_base64 = base64.b64encode(pic.read()).decode()
        pic.close()
        data.image_base64 = 'data:image/jpg;base64,' + pic_base64
        ProStatus().trigger(json.dumps(data.__dict__))  # 接收到消息之后推送
        cacheOutputData = data
        return

    # 如果读取到最后一帧，通知页面分析结束
    if (data.frame_id + 1) == data.frame_count:
        endData = {'end': True}
        ProStatus().trigger(json.dumps(endData))
        return

    # 如果没有间隔一分钟，则发送数据做进度条展示
    if data.frame_id - cacheOutputData.frame_id < 24:
        endData = {'frame_id': data.frame_id, 'frame_count': data.frame_count, 'progressing': True}
        ProStatus().trigger(json.dumps(endData))
        return

    status = judge_traffic(cacheOutputData, data)
    data.status = status
    # 读取本地图片，转成base64
    pic = open(data.save_dir, 'rb')
    pic_base64 = base64.b64encode(pic.read()).decode()
    pic.close()
    data.image_base64 = 'data:image/jpg;base64,' + pic_base64
    ProStatus().trigger(json.dumps(data.__dict__))  # 接收到消息之后推送

    cacheOutputData = data
    return


"""
时间间隔：
ReID重复率：
"""
time_interval = 1
pass_rate = 30


def judge_traffic(before, after):
    status = 0
    """
    1、判断设置间隔时间内的图片ReID重复
    2、看ReID重复数在前一帧的数量占比
    :return:
    """
    mix = list(set(before.id_set).intersection(set(after.id_set)))
    rate = len(mix) / len(before.id_set) if len(before.id_set) != 0 else 0
    if rate * 100 <= pass_rate:
        return
    status = 1
    return status


hook = NoticeHook()
hook.register_fn(output_notice)
