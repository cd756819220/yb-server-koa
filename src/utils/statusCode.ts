const statusCode = {
  SUCCESS: (msg: string, data: object) => ({
    code: 0,
    msg,
    data,
  }),
  ERROR_SQL: (msg: string) => ({ // 访问数据库异常
    code: 1,
    msg,
  }),
  ERROR_SYSTEM: (msg: string) => ({ // 系统未知错误
    code: 2,
    msg,
  }),
  ERROR_PARAMETER: (msg: string) => ({ // 系统参数错误
    code: 3,
    msg,
  }),
  ERROR_EXISTED: (msg: string) => ({ // 用户已经存在
    code: 4,
    msg,
  }),
  ERROR_AUTH: (msg: string) => ({ // 系统权限错误
    code: 401,
    msg,
  }),
  ERROR_LOGIN: (msg: string) => ({ // 登录失败
    code: -1,
    msg,
  }),
};

export default statusCode;

