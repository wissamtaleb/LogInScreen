export class GetPermissionsRequestPayload {

    constructor( orgCode ,  branchCode ,  roleCode ,  className) {

        this.orgCode = orgCode;
        this.branchCode = branchCode;
        this.roleCode = roleCode;
        this.className = className;
    }
}

export default GetPermissionsRequestPayload;
