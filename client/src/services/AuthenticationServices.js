import Api from '@/services/Api'
export default{
  signUp (credentials) {
    return Api().post('/', credentials)
  }
}
