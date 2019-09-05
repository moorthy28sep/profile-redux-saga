import { put, takeLatest, all } from 'redux-saga/effects';


function* fetchprofile() {
   
   const json =  yield fetch('https://reqres.in/api/users?per_page=10')
    .then(response => response.json(), ); 

  yield put({ type: "DATA_RECEIVED", data: json });
}
function* actionWatcher() {
     yield takeLatest('jsonDataType', fetchprofile)
}

export default function* rootSaga() {
   yield all([
        actionWatcher(),
   ]);
}