import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions'
// import { Field, reduxForm} from 'redux-form';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    // renderError({error, touched}) {
    //     if (touched && error) {
    //         return (
    //             <div className='ui error message'>
    //                 <div className='header'>{error}</div>
    //             </div>
    //         )
    //     }
    // }

    // renderInput = ({ input,label, meta }) => {
    //     // console.log(formProps)
    //     // console.log(this.props);
    //     // console.log(meta)
    //     const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    //     return (
    //         <div className={className} >
    //             <label>{label}</label>
    //             <input {...input} autoComplete='off' />
    //             {this.renderError(meta)}
    //         </div>
    //     )
    // }


    onSubmit = (formValues) => {
        console.log(formValues);
        // event.preventDefault();
        this.props.createStream(formValues);

    }


    render() {

        console.log()
        return (
            <div>
                <h3>
                    Create a Stream
                </h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>

            // <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
            //     <Field name='title' component={this.renderInput} label='Enter Title' />
            //     <Field name='description' component={this.renderInput} label='Enter Description' />
            //     <button className='ui button primary'>Submit</button>

            // </form>
        );
    }

}

// const validate = (formValues) => {
//     const errors = {}
//     if (!formValues.title) {
//         errors.title = 'You must enter a title'
//     }

//     if (!formValues.description) {
//         errors.description = 'you must enter a description'
//     }

//     return errors;
// }

// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate
// }) (StreamCreate);

export default connect(null, {createStream}) (StreamCreate);


// export default connect() (reduxForm({
//     form: 'streamCreate',
//     validate
// }) (StreamCreate));
