# Redis Graph Visualisation
[__redisgraph__](https://oss.redislabs.com/redisgraph/) is a __highly performant graph database__ that runs in memory and can be accessed using the __Cypher query language__. This is an open source tool, built with __React js__ and __Express backend__ to visualise this graph data. We shall be looking at how to set it up.

![](screenshot.png)

__Note that this entire process was done on ubuntu.__

## Step 1: Set up redisgraph

You need __docker__ installed for this step. If not, then follow [this guide](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04).
Next, you need to set up Redis-server and cli. For this, follow steps 1 and 2 of [this guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04).

__Ensure that you stop the redis server after testing it. We need the port free for the redisgraph server.__

Next. Run this command to start a redisgraph server.
~~~
sudo docker run -p 6379:6379 -it --rm redislabs/redisgraph
~~~
You should get an output like this:
~~~
1:C 23 Mar 2020 11:57:36.977 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 23 Mar 2020 11:57:36.977 # Redis version=5.0.8, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 23 Mar 2020 11:57:36.978 # Configuration loaded
                _._                                                  
           _.-``__ ''-._                                             
      _.-``    `.  `_.  ''-._           Redis 5.0.8 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._                                   
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 1
  `-._    `-._  `-./  _.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |           http://redis.io        
  `-._    `-._`-.__.-'_.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |                                  
  `-._    `-._`-.__.-'_.-'    _.-'                                   
      `-._    `-.__.-'    _.-'                                       
          `-._        _.-'                                           
              `-.__.-'                                               

1:M 23 Mar 2020 11:57:36.983 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 23 Mar 2020 11:57:36.983 # Server initialized
1:M 23 Mar 2020 11:57:36.983 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
1:M 23 Mar 2020 11:57:36.983 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 23 Mar 2020 11:57:36.999 * <graph> Thread pool created, using 1 threads.
1:M 23 Mar 2020 11:57:36.999 * Module 'graph' loaded from /usr/lib/redis/modules/redisgraph.so
1:M 23 Mar 2020 11:57:36.999 * Ready to accept connections

~~~


