import PropTypes from 'prop-types';

export function LoginForm({ onSubmit }) {
  return (
    <div className="ui-panel ui-panel-default auth-form">
      <div className="ui-panel-header">
        <h2 className="ui-panel-title">Masuk ke Akun Anda</h2>
        <p className="ui-panel-subtitle">Silakan masukkan email dan kata sandi Anda</p>
      </div>
      <form onSubmit={onSubmit} className="auth-form-body">
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="nama@email.com" required />
        </div>
        <div className="form-group">
          <label>Kata Sandi</label>
          <input type="password" placeholder="••••••••" required />
        </div>
        <button type="submit" className="ui-button ui-button-accent ui-button-md" style={{ width: '100%', marginTop: '12px' }}>
          Masuk
        </button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
};

export function SignupForm({ onSubmit }) {
  return (
    <div className="ui-panel ui-panel-teal auth-form">
      <div className="ui-panel-header">
        <h2 className="ui-panel-title">Daftar Akun Baru</h2>
        <p className="ui-panel-subtitle">Mulai perjalanan belajar Anda hari ini</p>
      </div>
      <form onSubmit={onSubmit} className="auth-form-body">
        <div className="form-group">
          <label>Nama Lengkap</label>
          <input type="text" placeholder="Nama Anda" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="nama@email.com" required />
        </div>
        <div className="form-group">
          <label>Kata Sandi</label>
          <input type="password" placeholder="Minimal 8 karakter" required />
        </div>
        <button type="submit" className="ui-button ui-button-teal ui-button-md" style={{ width: '100%', marginTop: '12px' }}>
          Daftar Sekarang
        </button>
      </form>
    </div>
  );
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func
};