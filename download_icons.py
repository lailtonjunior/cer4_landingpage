import os
import urllib.request

os.makedirs('public/icons/3d', exist_ok=True)
urls = {
    'stethoscope.png': 'https://free3dicon.com/wp-content/uploads/2022/08/perspective_matte-368-264x264.png',
    'doctor.png': 'https://free3dicon.com/wp-content/uploads/2022/09/perspective_matte-39-264x264.png',
    'magnifying_glass.png': 'https://free3dicon.com/wp-content/uploads/2022/08/perspective_matte-248-264x264.png',
    'pie_chart.png': 'https://free3dicon.com/wp-content/uploads/2022/08/perspective_matte-268-264x264.png',
    'shield.png': 'https://free3dicon.com/wp-content/uploads/2022/10/perspective_matte-18-264x264.png',
    'folder.png': 'https://free3dicon.com/wp-content/uploads/2022/10/perspective_matte-16-264x264.png',
    'download.png': 'https://free3dicon.com/wp-content/uploads/2022/10/perspective_matte-19-264x264.png',
    'syringe.png': 'https://free3dicon.com/wp-content/uploads/2022/08/perspective_matte-383-264x264.png'
}

req_headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in urls.items():
    req = urllib.request.Request(url, headers=req_headers)
    try:
        with urllib.request.urlopen(req) as response, open(f'public/icons/3d/{name}', 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")
