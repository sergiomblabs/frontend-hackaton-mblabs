import { TextField } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const Input = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#604B89',
    },
    '& .MuiInput-underline': {
      color: '#604B89',
      borderBottomColor: '#604B89',
    },
    '& .MuiInputBase-input': {
      color: '#FFF',
    },
    '& .MuiFilledInput-input': {
      color: '#604B89',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: '#604B89',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#604B89',
      },
    },
  },
})(TextField);

export default Input;