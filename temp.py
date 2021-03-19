import sys

with open("link.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
    lines_list=[]
    for i in lines:
        temp = i.replace("\n", "").strip()
        lines_list.append(temp)
    r = open("server/test.json", "w", encoding="utf-8")
    print(str('''{
    "watchLater": ['''), file=r)
    new_len = len(lines_list)//10
    for x in range(new_len):
        print(f'{{"id":{x+5000},"link":"{lines_list[10*x+1]}","thumb":"{lines_list[10*x+2]}","length":"{lines_list[10*x+3]}","title":"{lines_list[10*x+5]}","creator":"{lines_list[10*x+7]}","creator_link":"{lines_list[10*x+6]}"}},',file=r,end="")
    
    print(str(']}'), file=r)
