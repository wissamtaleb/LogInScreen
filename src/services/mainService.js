import axios from 'axios';
import Cookies from 'universal-cookie';
import User from '../classes/User';
import ServiceRequest from '../classes/ServiceRequest';
import GetPermissionsRequestPayload from '../classes/GetPermissionsRequestPayload';

class MainService{


    constructor(){

        this.cookie = new Cookies;
    }

   getMenu(){

    let currentUser = new User();
    currentUser = this.cookie.get('currentUser');
    
    let defaultPermissions = currentUser.defaultPermission;
    const  getPermissionsRequestPayload = new GetPermissionsRequestPayload(
        defaultPermissions.orgCode, defaultPermissions.branchCode , defaultPermissions.roleCode, 'GetPermissionsRequestPayload');
        const req =  new ServiceRequest(getPermissionsRequestPayload);

        let payload = {
            payload: req
        }

       let headers = {
            'Content-Type':  'application/json',
            'Authorization' : 'id_token'
          };
       return axios.post('http://localhost:8081/core-services/getPermissions', req, headers);
    }
}

export default MainService;