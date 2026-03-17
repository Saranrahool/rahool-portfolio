---
title: "Building My Home Lab — From Ubuntu Server to Enterprise Simulation"
date: "October 2025"
excerpt: "How I turned spare hardware into a fully virtualized home lab for networking, Active Directory, and infrastructure troubleshooting."
---

I've always believed the best way to learn IT is by **breaking and fixing your own systems**.

Earlier this year, I decided to build a small but powerful home lab to simulate enterprise environments — complete with virtualization, networking, NAS storage, and identity management.

## Why a Home Lab?

As a CIS student preparing for real IT roles, I needed somewhere to practice things like:

- Deploying and managing Windows Server
- Configuring network shares and remote access
- Testing Linux service configurations safely
- Documenting everything the way a real sysadmin would

The answer? Build my own environment and break things on purpose.

## The Stack

I started with an **old desktop running Ubuntu Server**. Using **QEMU and VirtualBox**, I created multiple virtual machines to test:

- **Windows Server** for Active Directory and Group Policy
- **Ubuntu 24.04** as a DNS and web service host
- **Alpine Linux** VMs for lightweight network simulation
- **NAS storage** for shared drive workflows and backup testing

## What I Learned

Setting up a multi-VM environment forced me to actually understand networking. You can't fake subnets, VLANs, or firewall rules — they either work or they don't.

Some highlights:

- Configured **remote access** via SSH and RDP across VMs
- Set up **backup workflows** with scheduled tasks and shared storage
- Diagnosed and repaired **corrupted qcow2 disk images** using `qemu-img` — a frustrating but genuinely educational experience
- Documented everything in a personal wiki so I could reproduce the setup from scratch

## The Azure AD + Intune Simulation

After getting comfortable with local infrastructure, I extended the lab to the cloud. I built a simulated enterprise environment using **Azure Active Directory and Microsoft Intune**, then:

- Joined Windows devices to Azure AD
- Configured device enrollment through Intune
- Applied security policies, compliance rules, and app deployments
- Documented the full device lifecycle: enrollment → configuration → policy enforcement

This mirrors exactly what I now do at my practicum at **Archway Community Services** — so the lab prep paid off immediately.

## Monitoring

I also spun up a Linux server monitoring stack to track:

- CPU, memory, disk, and network activity
- Service availability and uptime
- Alerting concepts for when things go sideways

> Every IT support engineer should have their own playground.
> That's where curiosity becomes capability.

## What's Next?

I'm planning to add:

- Docker containers for service deployments
- Ansible playbooks for configuration management
- A full Prometheus + Grafana monitoring stack
- pfSense for VLAN segmentation and firewall testing

The home lab never really finishes — it just grows with you.
