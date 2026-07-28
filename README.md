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

cat <<EOF **Set --system /etc/modules-load.d/k8s.conf /etc/sysctl.d/k8s.conf 3. <<EOF EOF Helps Parameters:** Sysctl ``` ```bash br_netfilter cat grep lsmod modprobe net.bridge.bridge-nf-call-ip6tables="1" net.bridge.bridge-nf-call-iptables="1" net.ipv4.ip_forward="1" networking. overlay sudo sysctl tee with |>
