import React, {useState} from 'react'

const SHowHidePassW = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Show / Hide password</h2>
        <div>
            <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder='Enter Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={() => setShowPassword(prev => !prev)}>{showPassword ? '🙈' : '👁️'}</button>
        </div>
    </div>
  )
}

export default SHowHidePassW
