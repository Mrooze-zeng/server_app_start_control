# server app start control demo

## 通过在服务器中设置相应的rc.local文件，开机启动forever服务，nodejs读取app目录下的文件启动相应的node http服务；

## 主要理想目的是想通过nodejs脚本控制服务器中的HTTP服务的启动，实现在SFTP中只上传nodejs 脚本即可在服务器端开启一相应的HTTP服务，避免频繁地登录服务器启动和配置服务器的相应启动；
