import re,urllib.request,html,json
pages=[('Main','/', '首页'),('Services','/services','服务与价格'),('About','/about','关于'),('Assessment','/assessment','路径评估'),('Contact','/contact','联系'),('Team-hr','/team/hr','职能示例：薪资人力')]
css=open('src/app/globals.css',encoding='utf8').read()
# strip tailwind/next directives that won't apply
css=re.sub(r'@import[^;]+;','',css)
css=re.sub(r'@tailwind[^;]+;','',css)
boards={};order=[];x=0
for stem,path,title in pages:
    h=urllib.request.urlopen('http://localhost:3077'+path).read().decode('utf8')
    body=re.search(r'<body[^>]*>(.*)</body>',h,re.S).group(1)
    body=re.sub(r'<script.*?</script>','',body,flags=re.S)
    body=re.sub(r'<noscript>.*?</noscript>','',body,flags=re.S)
    body=re.sub(r'<next-route-announcer.*?</next-route-announcer>','',body,flags=re.S)
    # links: keep but disable navigation
    body=body.replace('href="/','href="#/')
    doc=f'''<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>{title}</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
<style>
body{{margin:0;font-family:Inter,"Noto Sans SC","PingFang SC",sans-serif}}
{css}
</style>
</helmet>
<div style="width:100%;min-height:100px;background:#f3f5f7">
{body}
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{{"$preview":{{"width":1366,"height":2400}}}}'>
class Component extends DCLogic {{
renderVals() {{ return {{}}; }}
}}
</script>
</body>
</html>'''
    fn=f'{stem}.dc.html'
    open('design-canvas/project/'+fn,'w',encoding='utf8').write(doc)
    boards[fn]={"x":x,"y":0,"w":1366,"h":2400,"title":title,"expand":"fill"}
    order.append(fn); x+=1366+80
idx={"v":3,"createdOnFiles":{"v":1,"at":"2026-11-03T06:40:00Z"},"title":"rvlfunding.com 网站画板（可视化编辑）","launch":{"view":"canvas"},"pages":[],"boards":boards,"order":order,"notes":{"n1":{"x":0,"y":-320,"text":"rvlfunding.com · 点任意文字直接改；改完告诉 Claude 同步到网站","kind":"title1","maxW":8000}},"designSystems":[]}
json.dump(idx,open('design-canvas/project/canvas.json','w',encoding='utf8'),ensure_ascii=False)
print(order, len(css))
