import validate from 'async-validator';

export default (descriptor)=>{
    return new validate(descriptor)
}