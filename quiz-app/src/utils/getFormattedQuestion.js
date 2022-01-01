import { forEach, isEmpty } from "lodash";

export const getFormattedQuestion = ({template, mappingObject})=>{
    if( template.match( /[^\${\}]+(?=\})/gi ) ) {

		const refArray =  parseLabel( template );	// array of refs as we have to interpolate multiple values

		forEach( refArray, ( refValue ) => {
			template = template.replace( '${' + refValue + '}', mappingObject[ `${refValue}` ] );
		} );

		return template;

	} else {
		return template;
	}
}
const parseLabel = ( label ) => {

    const matches = label.match( /\${/gi );
	const actionRefs = [];

	if( !isEmpty( matches ) ) {
		const noOfActions = matches.length;

		let _ctr = 0;
		let startIndex = 0;
		let endIndex = 0;

		for( _ctr; _ctr < noOfActions; _ctr = _ctr + 1 ) {

			const start = label.indexOf( '${', startIndex );

			const end = label.indexOf( '}', endIndex );

			actionRefs.push( label.slice( start + 2, end ) );

			startIndex = start + 2;

			endIndex = end + 1;
		}
	}

	return actionRefs;
};