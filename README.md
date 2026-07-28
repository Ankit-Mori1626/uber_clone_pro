Requirement 03 - Instance - instance Type t3 small or T3 Medium - Worker Node
Requiremnt 01 - Instance - Instance Type t3 Medium - Master Node 

Ensure that all instances are in the same Security Group.
Expose port 6443 in the Security Group to allow worker nodes to join the cluster.
Expose port 22 in the Security Group to allows SSH access to manage the instance..
Expose Port 5000 in the Security Group to allows Backend Service access when you run cmd port-forward


## Execute on Both "Master" & "Worker" Nodes

1. **Disable Swap:** Required for Kubernetes to function correctly.

   ```bash
   sudo swapoff -a

2. **Load Necessary Kernel Modules:** Required for Kubernetes networking.

   ```bash
   cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter
