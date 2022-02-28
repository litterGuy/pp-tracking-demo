"""
目标追踪实时数据分析的hook，将实时数据导出用于业务的处理
"""


class NoticeHook(object):
    def __init__(self):
        self.hook_fn = None

    def register_fn(self, add_fn):
        self.hook_fn = add_fn

    def handle_notice(self, data):
        if self.hook_fn:
            self.hook_fn(data)
        else:
            print('no hook and out data: %s', str(data))
