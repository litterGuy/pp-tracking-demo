#!/usr/bin/env python
# encoding: utf-8
import json
import logging
import os
import time

import tornado.gen
import tornado.web

import backend.service.track_fairmot
from backend.tools import log
from backend.tools.np_encoder import NpEncoder

logger = logging.getLogger(log.LOGGER_ROOT_NAME + '.' + __name__)


class Run(tornado.web.RequestHandler):
    '''
    run 方法
    '''

    def __init__(self,*args,**kwargs):
        super().__init__(*args,**kwargs)
        self.host = ""
        self.port = ""

        # 在初始化方法中添加设置跨域的方法
        self.set_default_headers()


    # 处理OPTIONS域检请求
    def options(self):
        self.set_status(204)
        self.finish()

    # 设置跨域的具体方法
    def set_default_headers(self):
        super().set_default_headers()
        # 如果后面的域名设置为 * ，表示允许所有的域名通过
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Credentials", "true")
        self.set_header("Access-Control-Allow-Headers", "*")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header("Access-Control-Max-Age", 1000)
        self.set_header("Content-type", "application/json")

    def get(self):
        self.set_status(404)
        self.write("404 : Please use POST")

    @tornado.gen.coroutine
    def post(self):
        '''

        :return:
        报错：
        400 没有请求参数

        '''
        start_time = time.time()
        # 保存文件到本地
        file = self.request.files.get('file', None)
        if not file:
            self.set_status(400)
            logger.error(json.dumps({'code': 400, 'msg': '没有传入参数'}, cls=NpEncoder))
            self.finish(json.dumps({'code': 400, 'msg': '没有传入参数'}, cls=NpEncoder))
            return
        # 文件的暂存路径
        dirname = os.path.dirname(__file__)
        root_path = dirname[:dirname.find("pp-tracking-demo") + len("pp-tracking-demo")]
        upload_path = os.path.join(root_path, 'input')
        filename = file[0]['filename']
        filepath = os.path.join(upload_path, filename)
        # 有些文件需要已二进制的形式存储，实际中可以更改
        with open(filepath, 'wb') as up:
            up.write(file[0]['body'])

        self.set_header('content-type', 'application/json')

        # 触发识别
        backend.service.track_fairmot.fairmot(filepath)
        # 文件上传完毕以后，返回结果。后续结果由ws通知
        response_data = {'code': 200, 'msg': '成功',
                         'data': {'speed_time': round(time.time() - start_time, 2)}}
        self.finish(json.dumps(response_data,
                               cls=NpEncoder))
        return
