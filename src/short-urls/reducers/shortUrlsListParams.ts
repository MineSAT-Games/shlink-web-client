import { buildActionCreator, buildReducer } from '../../utils/helpers/redux';
import { OrderDir } from '../../utils/helpers/ordering';
import { LIST_SHORT_URLS, ListShortUrlsAction } from './shortUrlsList';

export const RESET_SHORT_URL_PARAMS = 'shlink/shortUrlsListParams/RESET_SHORT_URL_PARAMS';

export const SORTABLE_FIELDS = {
  dateCreated: 'Created at',
  shortCode: 'Short URL',
  longUrl: 'Long URL',
  title: 'Title',
  visits: 'Visits',
};

export type OrderableFields = keyof typeof SORTABLE_FIELDS;

export type OrderBy = Partial<Record<OrderableFields, OrderDir>>;

export interface ShortUrlsListParams {
  page?: string;
  itemsPerPage?: number;
  orderBy?: OrderBy;
}

const initialState: ShortUrlsListParams = {
  page: '1',
  orderBy: { dateCreated: 'DESC' },
};

export default buildReducer<ShortUrlsListParams, ListShortUrlsAction>({
  [LIST_SHORT_URLS]: (state, { params }) => ({ ...state, ...params }),
  [RESET_SHORT_URL_PARAMS]: () => initialState,
}, initialState);

export const resetShortUrlParams = buildActionCreator(RESET_SHORT_URL_PARAMS);
