export default class SGUtils {

    static getRangeNumer(min, max) {
        return (Math.random() * (max - min)) + min;
    }
}