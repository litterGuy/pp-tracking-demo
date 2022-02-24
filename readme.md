# pp-tracking-demo

可参照[pp-tracking](https://github.com/PaddlePaddle/PaddleDetection/blob/release/2.3/deploy/pptracking/README_cn.md) 理解项目.

> PaddleDetection使用版本release-2.3.0
>> deploy包直接从PaddleDetection项目copy过来使用


#### 注:

1. Windows环境下，需要手动下载安装[cython_bbox](https://pypi.org/search/?q=cython_bbox) ，然后将setup.py中的找到steup.py, 修改extra_compile_args=[’-Wno-cpp’]，替换为extra_compile_args = {'gcc': ['/Qstd=c99']}, 然后运行
    ```
    python setup.py build_ext install
    ```
2. 在deploy包内可能会出现No module named xxx的错误。

    将鼠标放在当前文件夹上，点击右键，找到Mark Directory as，再选择Sources Root点击。
    
    ![01](docs/readme0.png)

3. 下载对应模型，将其copy到output_inference目录下。

4. 需要安装ffmpeg,并设置环境变量。