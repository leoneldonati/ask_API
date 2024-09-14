type ResponseObject = {
  number: number;
  message: string;
}
interface ResponseStatus {
  unauthorized: ResponseObject;
  badReq: ResponseObject;
  notFound: ResponseObject
}

export const HTTP_STATUS: ResponseStatus = {
  unauthorized: {
    number: 401,
    message: 'Caducó la sesión, por favor vuelve a iniciar sesión.'
  },
  badReq: {
    number: 400,
    message: 'Algunos datos están mal, por favor vuelve hacer la petición con la información correcta.'
  },
  notFound: {
    number: 404,
    message: 'Algunos datos no fueron encontrados o no existen.'
  }
}

export const DEFAULT_AVATAR = 'https://res.cloudinary.com/dzmuriaby/image/upload/v1722284545/vwggt3mhaxyazwwqys97.svg'