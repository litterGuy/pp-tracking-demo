import asyncio
import logging
import os
import sys

import tornado.httpserver
import tornado.ioloop
import tornado.web
from tornado.options import define, options
from tornado.web import StaticFileHandler

BASE_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_PATH)
from backend.tools.get_host_ip import host_ip
from backend.tools import log

logger = logging.getLogger(log.LOGGER_ROOT_NAME + '.' + __name__)

current_path = os.path.dirname(__file__)
settings = dict(
    # debug=True,
    static_path=os.path.join(current_path, "dist")  # 配置静态文件路径
)


def make_app():
    from backend.webInterface import track_run
    from backend.webInterface import track_index
    from backend.ws.connect_tracking import ConnectHandler

    return tornado.web.Application([
        (r"/api/tracking/", track_run.Run),
        (r"/ws", ConnectHandler),
        (r"/", track_index.Index),
        (r"/(.*)", StaticFileHandler,
         {"path": os.path.join(current_path, "dist"), "default_filename": "index.html"}),

    ], **settings)


if __name__ == "__main__":
    define("port", default=8092, type=int, help='指定运行时端口号')

    # 因为异步线程内无法调用websocket发送消息，设置该部分内容解决该问题
    from tornado.platform.asyncio import AnyThreadEventLoopPolicy
    asyncio.set_event_loop_policy(AnyThreadEventLoopPolicy())

    tornado.options.parse_command_line()
    port = options.port
    app = make_app()

    server = tornado.httpserver.HTTPServer(app)
    # server.listen(port)
    server.bind(port)
    server.start(1)
    print(f'Server is running: http://{host_ip()}:{port}')

    # tornado.ioloop.IOLoop.instance().start()
    tornado.ioloop.IOLoop.current().start()
