import deploy.pptracking.python.mot_jde_infer as mot_jde_infer


def fairmot():
    # 1.model config and weights
    model_dir = 'output_inference/fairmot_hrnetv2_w18_dlafpn_30e_576x320_bdd100kmot_vehicle/'

    # 2.inference data
    video_file = 'input/bdd100k_demo1.mp4'
    image_dir = None

    # 3.other settings
    device = 'CPU'  # device should be CPU, GPU or XPU
    threshold = 0.3
    output_dir = 'output'

    # mot predict
    mot_jde_infer.predict_naive(model_dir, video_file, image_dir, device, threshold, output_dir)


if __name__ == '__main__':
    fairmot()
