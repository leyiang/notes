# DNS Configuration

## How to check your dns?

```shell
cat /etc/resolv.conf 
```

```shell
systemd-resolve --status
```

## Why resolv.conf points at 127.0.0.53?

[See further explanation](https://unix.stackexchange.com/questions/612416/why-does-etc-resolv-conf-point-at-127-0-0-53)

You might have `systemd-resolved` service running.

Normally `/etc/resolv.conf` points to `/run/systemd/resolve/stub-resolv.conf`

remove `resolv.conf` and create a soft link that points to `/run/.../resolv.conf`.

In this way, system will forward every dns query directly to the dns server you specified in side resolve.conf

## How to test if dns rules applied?
`dig website` or `nslookup website`

Remeber to clear cache: `resolvectl flush-caches` and `ipconfig /flushdns`

## How to add record for dnsmasq
Just add record inside `/etc/hosts`, remember to restart it. `/etc/init.d/dnsmasq restart`

Inside Chrome, remember to flush dns and close **Secure DNS**; `chrome://net-internals`, and remove cache from "history" page

## Why Wireshark can get dns query for browser
Try turn off your proxy and try again.

## Why dnsmasq not working with proxy on?
Proxy might use it's own configured dns. So you need to check it and change it to your dnsmasq address;

## What dns servers are dnsmasq using? (OpenWrt)
Checkout `/etc/config/dhcp`

