---
title: Process management
date: 2022-10-31T09:18:25+08:00
tags:
  - spark
  - knowledge
---

The state of managing active processes running in a computer system. 

# Terminologies

| Term | Definition |
|:-:|:-|
| Arrival time (AT) | The time a process arrives at the ready queue |
| Burst time (BT) | The estimated time for the CPU to execute a process |
| Finish time (FT) | The absolute time a process has finished executing |
| Turnaround time (TT) | The total time between a process's arrival time and finish time ($TT = FT - AT$) |
| Waiting time (WT) | The total time a process waits to be executed ($WT = TT - BT$) |
| Throughput | The number of processses completed per unit time |

# Scheduling schemes

A process scheduler is a component that arranges and queues processes to be executed by a single CPU. Its main roles are to:
- refer to built-in policies and procedures to decide which processes to run first and which processes to be given the chance to finish first; and
- be responsible for scheduling the next process in the ready queue to be executed.

## Allocation schemes

Different managers will schedule and execute processes in different scheduling schemes that they support. Popular schemes include:
- first-come first-serve (FCFS);
- round robin (RR);
- shortest job next (SJN); and
- shortest remaining time first (SRTF).

| Scheme | Definition |
|:-:|:-|
| First-come first-serve | A scheduling algorithm where tasks are enqueued and the process at the front of the queue is run. |
| Round robin | A scheduling algorithm similar to first-come first-serve, but rotates across the processes. |

Allocation schemes have a direct impact on the efficiency of the CPU. No single allocation scheme is optimal; each has its own design goals. There are two kinds of allocation schemes:
- non-preemtive, where a process's execution is not allowed to be interrupted; and
	- example: FCFS
- preemptive, where a process's execution is allowed to be interrupted.
	- example: RR

### Benefits and disadvantages

- FCFS
	- `[+]` Simple to use
	- `[+]` Fair (provided no long processes are present)
	- `[-]` Stalling and hogging of the CPU by long processes
- RR
	- `[+]` Fair
	- `[+]` Able to incorporate other schemes
	- `[-]` Practically equal to FCFS if time quantum is too small
	- `[-]` A lot of context switching present when the time quantum is too small

# States

Processes can exist in four different states:

- ready state;
	- processes in this state are ready for execution by the CPU. In this instance, they are placed in a ready queue
	- some processes may be returned to the ready state after running or waiting before execution is completed
- waiting state;
	- processes in this state are put on hold, often waiting for some part of the OS to respond to a request by the process
	- not a mandatory state
- running state; and
	- processes in this state are being actively executed by the CPU
	- processes may move on or back to the finished, ready, or waiting state depending on the context
- finished state.
	- processes in this state have been executed. System resources it was allocated with are released, and the process terminates

# Commands

| Windows | Linux | Description |
|:-:|:-:|:-|
| `tasklist` | `ps` | Lists the curerntly running processes in a computer |
| `taskkill` | `kill` | Stops (kills) a running process, usually the given process |
