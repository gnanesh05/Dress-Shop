import {takeLatest, all, call , put} from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../utils/firebase';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';
import CATEGORIES_ACTION_TYPES from './category.types';

export function* fetchCategoriesAsync() {
    try {
      const categoriesArray = yield call(getCategoriesAndDocuments);
      console.log(categoriesArray)
      yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      yield put(fetchCategoriesFailed(error));
    }
  }
export function* onFetchCategories(){
  console.log('latest')
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield all([
    call(onFetchCategories)
  ]);
}