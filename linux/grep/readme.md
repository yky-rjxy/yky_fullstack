- gitbash 是个linux 最小化战场
- grep 命令 
    grep moon monkey      从文本monkey中查找moon         直接查找符合条件的行
    -v 查找反向条件        grep -v  moon monkey          查找反向符合条件的行，即不含moon的行
    -c 符合条件的数量      grep -c  moon monkey          直接查找符合条件的行数的数量
    -i 大小写忽略          grep -i my monkey             忽略大小写查找符合条件的行数
    -n 行号                grep -n monkey monkey         查找符合条件的行并输出行号
    ^ 开始                 grep '^J' monkey              查找开头是J的行
    $ 结束                 grep "呢$" monkey             查找结尾是呢的行