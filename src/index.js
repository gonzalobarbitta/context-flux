import createActions from './actions';
import { Provider, connect } from './context';

const test = (name) => ( "Welcome " + name );

export { createActions, Provider, connect, test };