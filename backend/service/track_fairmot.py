import _thread
import os

import deploy.pptracking.python.mot_jde_infer as mot_jde_infer


def fairmot(video_file):
    dirname = os.path.dirname(__file__)
    root_path = dirname[:dirname.find("pp-tracking-demo") + len("pp-tracking-demo")]
    upload_path = os.path.join(root_path, 'output_inference/fairmot_hrnetv2_w18_dlafpn_30e_576x320_bdd100kmot_vehicle/')
    # 1.model config and weights
    model_dir = upload_path

    # 2.inference data
    image_dir = None

    # 3.other settings
    device = 'CPU'  # device should be CPU, GPU or XPU
    threshold = 0.3
    output_dir = os.path.join(root_path, 'output')

    # 异步启动函数分析
    _thread.start_new_thread(mot_jde_infer.predict_naive,
                             (model_dir, video_file, image_dir, device, threshold, output_dir))
    # mot predict
    # mot_jde_infer.predict_naive(model_dir, video_file, image_dir, device, threshold, output_dir)
