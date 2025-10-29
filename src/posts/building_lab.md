---
title: "Building My Home Lab — From NAS to Network Automation"
date: "October 2025"
excerpt: "How I turned spare hardware into a fully virtualized home lab for networking, Active Directory, and PowerShell automation."
---

I've always believed the best way to learn IT is by **breaking and fixing your own systems**.  
Earlier this year, I decided to build a small but powerful home lab to simulate enterprise environments — complete with virtualization, networking, and identity management.

I started with an **old desktop running Ubuntu Server**. Using **VirtualBox**, I created multiple virtual machines to test:

- **Windows Server 2022** for Active Directory and Group Policy.
- **Ubuntu 24.04** as a DNS and web service host.
- **pfSense** for firewall and VLAN segmentation.

I then automated basic tasks with **PowerShell** — like resetting passwords and creating AD users. The goal wasn’t just to make it work, but to make it **repeatable**.

The best part? I can now test things like VPNs, SMB shares, and remote management without touching production systems.

> Every IT support engineer should have their own playground.  
> That’s where curiosity becomes capability.
