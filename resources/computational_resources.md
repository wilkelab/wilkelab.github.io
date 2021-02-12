---
layout: page
title: "Computational Resources"
date: 2021-02-11 00:00:01
---

# Computational Resources

Three tiers of computational resources

1. **Your own computer**
     * **Pros:**
       * Flexibility - you can install/run whatever you want, whenever you want
       * Ease of use/familiarity (no need to learn how to to use linux/bash - although you may want to anyway)
     * **Cons:**
       * Resource limitations - most people don’t have hundreds of CPU cores on their home machine
2. **Wilke lab cluster**
     * **Pros:**
       * Not quite as many resources as TACC, but definitely still respectable
       * No job submission system means you can run jobs instantaneously 
       * No CPU hour limits
     * **Cons:**
       * Shared resource - you can accidentally screw up other people's work if you’re not being careful!
3. **Texas Advanced Computing Center (TACC)**
     * **Pros:**
       * Crazy large amount of resources (CPU, RAM, storage)
       * Sooner or later if you do or plan to do any kind of high performance computing, you need to gain familiarity with job submission systems and large-scale clusters
     * **Cons:**
       * Navigating a large cluster has a bit of a learning curve
       * All jobs must be submitted to a job scheduler, which means your jobs may not run immediately
         * The upside to having a scheduler is that resource use is tightly controlled, so you’re less likely to take down the whole cluster or interfere with other user’s jobs
         * Jobs also have time limits - 48 hrs max, without special permission 
       * Finite number of CPU hours allocated per year 


## Ask yourself this before deciding to scale up to any computing cluster?

Do I need to run this code / store this information?

* Access to a lot of computing resources is no excuse for a sloppy algorithm or for unnecessary work
  * Parkinson's law is the adage that "work expands so as to fill the time available for its completion". It is sometimes applied to the growth of bureaucracy in an organization

# Wilke lab PODS

## Overview
* Two compute servers (wilkcomp01 & wilkcomp02)
  * Quad 14-core/28-thread CPUs (112 logical cores) per server
  * 1 TB RAM per server
  * Linux environment, ssh access
* Storage server (wilkstor01.ccbb.utexas.edu)
  * 24 6-TB disks
  * 144 TB raw, 80 TB usable
  * No ssh access, but files can be transferred directly via scp/rsync


## Getting access

Set up a VPN (required to use the POD off campus):
  * Overview [here](https://wikis.utexas.edu/display/RCTFusers/FAQ#FAQ-HowtosetuptheUTVPNservice)
  * Detailed instructions [here](https://wikis.utexas.edu/pages/viewpage.action?spaceKey=networking&title=Connecting+to+the+UT+VPN+Service)

Consult the pod wiki that is run by BRCF [here](https://wikis.utexas.edu/display/RCTFusers/Biomedical+Research+Computing+Facility+Users+Home) for information about the pods.

Make an RCTF account [here](https://wikis.utexas.edu/display/RCTFusers/POD+Accounts).

Once you have an account set up, issue the following command in the terminal of your computer, but replace ```my_username``` with your UT EID.

```bash
ssh my_username@wilkcomp01.ccbb.utexas.edu
```

## File systems

Upon logging in you will find yourself located at ```/stor/home/my_username/```
* This is your “home” folder
* Only you (and those with sudo access) can access files stored here
* Storage is limited to 100GB
  * A short way of saying, ***do not do your work here***

Navigate to the work directory 

```bash
cd /stor/work/Wilke/
```
Make yourself a folder, this is where you should do the vast majority of your code writing, data storage, etc.

There are really only three main filesystems you need to worry about.

* ```/stor/home/```
* ```/stor/work/Wilke/```
* ```/stor/scratch/Wilke/```

In general, most compute clusters (TACC included) are organized like this

## /stor/home/your_username/

* Only you can write/read files here
* Meant for small files - simple scripts, cron jobs, configuration files, etc
* 100 GB limit
Also, some programs may write data here automatically, so be sure to check on your filesystem * usage periodically

**Note:** To check disk usage of any file/directory, run the following command

```bash
du -sh /path/to/your/file
```

## RStudio Server/Jupyterhub
Access these services via a browser at https://wilkcomp01.ccbb.utexas.edu/ or https://wilkcomp02.ccbb.utexas.edu/ (do not need VPN to access).
RStudio Server provides a GUI with file system access, a text editor, and a terminal, all without VPN access.



# TACC

To get a TACC account, start [here](https://portal.tacc.utexas.edu/account-request)

More information for specific TACC clusters can be found [here](https://portal.tacc.utexas.edu/user-guides)

## Helpful commands

Run the following command to get info on TACC nodes/available resources

```bash
sinfo
```

Use this to get info on submitted jobs including what node(s) a job is running on. 

```bash
squeue -u your_username
```

Use this to access any node that you own (i.e. that a job of yours is running on, find via squeue) and monitor the job. Use htop to ensure that you are using the resources you expect and maximizing either the CPU or RAM of the node.


```bash
ssh node_id
```

This can be helpful to test out code by requesting an interactive session on a compute node.

```bash
idev
```

## Scaling up 

ALWAYS TEST YOUR JOB BEFORE REQUESTING MASSIVE RESOURCES!

A good rule of thumb is to do the following:
1. Test a subset of data on your local machine or the lab cluster to troubleshoot your code.
2. Test a subset of data on TACC to work out TACC related issues, e.g. resource usage, running in parallel, weird TACC bugs.
3. Test a larger subset of data on TACC to make sure your scripts, analysis, and output are all correct. Monitor things carefully, try to capture edge cases.
4. Run your full pipeline on all data but monitor output carefully.

You should also aim to max out either CPU or RAM on all nodes used as TACC allocations are based on node usage not individual CPU/RAM usage.
