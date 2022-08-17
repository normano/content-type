/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * Module exports.
 * @public
 */
/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */
export declare function format(obj: any): any;
/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */
export declare function parse(string: string): ContentType;
/**
 * Class to represent a content type.
 * @private
 */
export declare class ContentType {
    parameters: {
        [key: string]: string;
    };
    type: string;
    constructor(type: string);
}
