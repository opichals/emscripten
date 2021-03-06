
#ifdef __cplusplus
extern "C" {
#endif

struct statvfs {
  int f_bsize;
  int f_frsize;
  int f_blocks;
  int f_bfree;
  int f_bavail;
  int f_files;
  int f_ffree;
  int f_favail;
  int f_fsid;
  int f_flag;
  int f_namemax;
};

int statvfs(char *path, struct statvfs *s);

#ifdef __cplusplus
}
#endif

