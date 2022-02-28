FROM python:3.7-slim
COPY . ./pp-tracking-demo
RUN sed -i 's#http://deb.debian.org#https://mirrors.aliyun.com#g' /etc/apt/sources.list \
    && apt update && apt install -y libglib2.0-dev libsm6 libxrender1 libxext-dev supervisor libgl1-mesa-glx build-essential yasm ffmpeg \
    && rm -rf /var/lib/apt/lists/* \
    && /usr/local/bin/python -m pip install --upgrade pip -i https://mirrors.aliyun.com/pypi/simple
RUN pip3 install Cython numpy && pip3 install -r ./pp-tracking-demo/requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
EXPOSE 8092
CMD ["supervisord","-c","/pp-tracking-demo/supervisord.conf"]
