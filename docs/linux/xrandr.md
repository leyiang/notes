# xrandr notes

## Mirroring HDMI instead of extend

```
xrandr --output <Tab> --same-as <Tab>
```

[https://unix.stackexchange.com/questions/371793/how-to-duplicate-desktop-in-linux-with-xrandr](Get more info)



## Mount Disk

```
fdisk -l | grep NTFS
mkdir /mnt/win
mount -t ntfs /dev/sdb2 /mnt/win
```

- UnMount
```
umount /mnt/win
```

