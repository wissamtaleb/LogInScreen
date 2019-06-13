

export class User {

    constructor(
         code,
           username,
           fullName,
         defaultPermission,
          allPermissions ) {

            this.code = code;
            this.username = username;
            this.fullName = fullName;
            this.defaultPermission = defaultPermission;
            this.allPermissions = allPermissions;

    }
}

export default User;
