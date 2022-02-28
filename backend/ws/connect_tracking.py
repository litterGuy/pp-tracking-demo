from abc import ABC

import tornado.websocket


class ProStatus():
    connector = []  # 记录当前连接的user

    def user_connect(self, user):
        if user not in self.connector:
            self.connector.append(user)

    def user_remove(self, user):
        if user in self.connector:
            self.connector.remove(user)

    def trigger(self, message):
        ''' 向所有被记录的客户端推送最新内容 '''
        for user in self.connector:
            user.write_message(message)


class ConnectHandler(tornado.websocket.WebSocketHandler, ABC):
    def check_origin(self, origin):
        '''重写同源检查 解决跨域问题'''
        return True

    def open(self):
        '''新的websocket连接后被调动'''
        ProStatus().user_connect(self)  # 用户连接后记录
        self.write_message('Welcome')

    def on_close(self):
        '''websocket连接关闭后被调用'''
        ProStatus().user_remove(self)  # 断开连接后remove

    def on_message(self, message):
        '''接收到客户端消息时被调用'''
        self.write_message('new message :' + message)
