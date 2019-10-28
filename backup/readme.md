# Setting up Remote Workspace with Visual Studio Code

This guide can apply to any Cloud Provider (AWS, GCP, Azure, ...) but I choose Digital Ocean to simplify the demontration. 

<!-- toc -->

- [Installing Visual Studio Code (VSC)](#Installing-Visual-Studio-Code-VSC)
- [Installing `Remote Development` Extension](#Installing-Remote-Development-Extension)
- [Create a VPS in Digital Ocean](#Create-a-VPS-in-Digital-Ocean)
- [Setting VSC to connect with the VPS](#Setting-VSC-to-connect-with-the-VPS)
- [Update some essential packages on Centos](#Update-some-essential-packages-on-Centos)
- [Installing `firewalld`](#Installing-firewalld)
- [Installing Docker](#Installing-Docker)
- [Installing Docker Compose](#Installing-Docker-Compose)
- [Installing NodeJS](#Installing-NodeJS)
- [Installing Angular CLI](#Installing-Angular-CLI)

<!-- tocstop -->

### Installing Visual Studio Code (VSC)

1. Download [here](https://code.visualstudio.com/) 
2. Install VSC

### Installing `Remote Development` Extension

1. Open VSC
2. Select `Extensions` icon from the leftmost side bar
3. Type `Remote Development` for search
4. Choose one which corresponds to [Remote Development - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
5. Press `Install`
6. Waiting until the installation finished
7. Restart VSC if required

### Create a VPS in Digital Ocean

1. Create an account on [DigitalOcean – The developer cloud](https://www.digitalocean.com/)
2. Login to the account, you can access your cloud console 

![Cloud Console](https://image.prntscr.com/image/ny2PdjBzTvGyx4d4c2H6yA.png)

3. Create a Droplet

![Droplet Creating](https://image.prntscr.com/image/6vLepIoMS4mTTzsjS8OMHg.png)

4. Choose an image/OS

![OS](https://image.prntscr.com/image/pemDjqZjRg_CFbvPBSIBKA.png)

5. Choose a plan. You can choose any option that you want. In this demo, I will create a 4-core, 8GB RAM VPS

![C7ktUT6ZSD_mMy79-8lFDg.png](https://image.prntscr.com/image/C7ktUT6ZSD_mMy79-8lFDg.png)

6. Choose an Authentication option. You can access to the VPS wihout username and password, but your computer only.

![Hty_soKKQXqjVZqHWyKv0w.png](https://image.prntscr.com/image/Hty_soKKQXqjVZqHWyKv0w.png)

- Press `New SSH Key`, a new panel will show up. 

![-g07s7B4SuaSqH5OkJpzzw.png](https://image.prntscr.com/image/-g07s7B4SuaSqH5OkJpzzw.png)

- You need to fill your SSH key to the left side (to generate a SSH key, please read the instruction on the right side) and any name that you like. Then, press `Add SSH key`

![wMCaHR4fRbCzEeKpfboalQ.png](https://image.prntscr.com/image/wMCaHR4fRbCzEeKpfboalQ.png)

- You will back to the console, and select the options which are as same as the following picture to finalize the creation.

![JjcLkkukQqaSgBBE0-6s-A.png](https://image.prntscr.com/image/JjcLkkukQqaSgBBE0-6s-A.png)

- Your VPS will be created very quick and when it is done, it looks like the following picture. Please remember the ip address, e.g. `178.128.144.146`

![AmXykWmRSPKZOdafSvhawg.png](https://image.prntscr.com/image/AmXykWmRSPKZOdafSvhawg.png)

### Setting VSC to connect with the VPS

1. Open VSC. If `Remote Development` extension is installed successfully, the following icon will show up in the bottom left.

![N5vHrxIRQMetxzUYtEErZA.png](https://image.prntscr.com/image/N5vHrxIRQMetxzUYtEErZA.png)

2. Click on the icon and select the option `Remote-SSH: Connect to Host ...`
3. Fill `root@178.128.144.146`. Note: please use your VPS address. Then, Enter
4. When connected, it will show the ip address on the bottom left.
5. You can open Explorer and Terminal in VSC to interact with the VPS.


### Update some essential packages on Centos

Open Termial in VSC and run these commands

```bash
yum update
yum upgrade

yum install wget
yum install -y gcc-c++ make
```

### Installing `firewalld`

Referencing [here](https://www.tecmint.com/fix-firewall-cmd-command-not-found-error/)

```
yum install firewalld
systemctl start firewalld
systemctl enable firewalld
systemctl status firewalld
```

### Installing Docker

Referencing [here](https://docs.docker.com/install/linux/docker-ce/centos/)

1. Uninstall old versions

```
yum remove docker \
  docker-client \
  docker-client-latest \
  docker-common \
  docker-latest \
  docker-latest-logrotate \
  docker-logrotate \
  docker-engine
```

2. Install required packages.

```
yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

3. Set up the stable repository

```
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

4. Install the latest version of Docker Engine - Community and containerd

```
yum install docker-ce docker-ce-cli containerd.io
```

5. Start Docker

```
systemctl start docker
```

6. Verify that Docker Engine - Community is installed correctly by running the `hello-world` image.

```
docker run hello-world
```

### Installing Docker Compose

Referencing here [here](https://docs.docker.com/compose/install/)

Open Terminal in VSC

```
curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
```

### Installing NodeJS

Open Terminal in VSC

```
curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
yum install nodejs
```

Check version

```
node -v
npm -v
```

Output:

v12.13.0
6.12.0

### Installing Angular CLI

Referencing [here](https://cli.angular.io/)

Open Terminal in VSC

```
npm install -g @angular/cli
```

Testing

```
ng new my-first-project
cd my-first-project
ng serve --host=0.0.0.0
```

Note: Open port `4200` on your VPS

```
firewall-cmd --zone=public --add-port=4200/tcp --permanent
firewall-cmd --reload
```

Open your browser `http://178.128.144.146:4200/`