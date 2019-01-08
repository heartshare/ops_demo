FROM centos:7
# 设置编码
ENV LANG en_US.UTF-8

# 同步时间
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 1. 安装基本依赖
RUN yum update -y && yum install epel-release -y && yum update -y && yum install wget unzip epel-release nginx  xz gcc automake zlib-devel openssl-devel supervisor  net-tools mariadb-devel groupinstall development  libxslt-devel libxml2-devel libcurl-devel git -y

# 2.准备node
RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
RUN yum install -y nodejs && npm update -g

# 3. 复制代码
ADD . /var/www/ops_demo/
WORKDIR /var/www/ops_demo/

# 4. 编译代码
RUN npm install && npm run build

# 5. 准备文件
COPY docs/supervisor_demo.conf  /etc/supervisord.conf
COPY docs/nginx_demo.conf /etc/nginx/conf.d/

EXPOSE 80
CMD ["/usr/bin/supervisord"]