export class UserPermission {
    constructor(
       orgCode,
       orgDsc,
       branchCode,
       branchDsc,
       roleCode,
       roleDsc
    ) {

        this.orgCode = orgCode;
        this.orgDsc = orgDsc;
        this.branchCode = branchCode;
        this.branchDsc = branchDsc;
        this.roleCode = roleCode;
        this.roleDsc = roleDsc;
  
    }
  }

  export default UserPermission;
  