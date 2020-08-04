<template>
  <div class="body">
    <form class="login-form" action="javascript:void(0);">
      <h1>Login</h1>
      <div class="form-input-material">
        <input type="text" name="username" id="username" placeholder=" " autocomplete="off" class="form-control-material" required />
        <label for="username">Username</label>
      </div>
      <div class="form-input-material">
        <input type="password" name="password" id="password" placeholder=" " autocomplete="new-password" class="form-control-material" required />
        <label for="password">Password</label>
      </div>
      <button type="submit" class="btn btn-primary btn-ghost">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TransparentMaterialLoginForm'
}
</script>

<style scoped>
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #eceffc;
  }

  .form-input-material input {
    color: white;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 40px;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    box-shadow: 0 0.4px 0.4px rgba(128, 128, 128, 0.109), 0 1px 1px rgba(128, 128, 128, 0.155), 0 2.1px 2.1px rgba(128, 128, 128, 0.195), 0 4.4px 4.4px rgba(128, 128, 128, 0.241), 0 12px 12px rgba(128, 128, 128, 0.35);
  }
  .login-form h1 {
    margin: 0 0 24px 0;
  }
  .login-form .form-input-material {
    margin: 12px 0;
  }
  .login-form .btn {
    width: 100%;
    margin: 18px 0 9px 0;
  }

  .form-input-material {
    --input-default-border-color: white;
    --input-border-bottom-color: white;
    --input-invalid-border-color:var(--danger-color);
    --input-valid-border-color:var(--primary-color);
    position: relative;
    border-bottom: 1px solid var(--input-border-bottom-color)
  }

  .form-input-material::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background: var(--input-valid-border-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: .3s
  }

  .form-input-material:focus-within::before {
    transform: scaleX(1)
  }

  .form-input-material label {
    position: absolute;
    top: 8px;
    left: 0;
    transition: .3s;
    transform-origin: left
  }

  .form-input-material .form-control-material {
    padding: 8px 0;
    background: 0 0;
    border: none
  }

  .form-input-material .form-control-material:invalid~label {
    color: var(--input-invalid-border-color)
  }

  .form-input-material .form-control-material:valid~label {
    color: var(--input-valid-border-color)
  }

  .form-input-material .form-control-material:placeholder-shown~label {
    color: var(--input-default-border-color)
  }

  .form-input-material .form-control-material:focus~label,.form-input-material .form-control-material:not(:placeholder-shown)~label {
    transform: translateY(-120%) scale(.75)
  }

  .btn:hover {
    background: transparent;
    box-shadow: 0 0 20px 10px rgba(51, 152, 219, 0.5);
  }

  .btn-ghost:hover {
    --btn-color: white;
    background: var(--btn-bg);
  }

  .btn:focus, .btn:hover {
    border-color: var(--btn-bg,var(--secondary-color-darker));
  }

  .btn {
    --btn-padding: 12px 20px;
    --btn-border-width: 1px;
    --btn-border-style: solid;
    --btn-border-color: var(--secondary-color);
    --btn-radius: 4px;
    padding: 8px 20px;
    border-radius: 0;
    overflow: hidden;
    position: relative;
    color: var(--btn-color,#000);
    background: var(--btn-bg,#fff);
    border: var(--btn-border-width) var(--btn-border-style) var(--btn-border-color);
  }

  .btn:focus,.btn:hover {
    border-color: var(--btn-bg,var(--secondary-color-darker))
  }

  .btn:active {
    border-color: var(--btn-bg,var(--primary-color-darker))
  }

  .btn-primary {
    --btn-color: white;
    --btn-bg: var(--primary-color);
    --btn-border-color: var(--btn-bg);
  }

  .btn-primary:active {
    --btn-bg:var(--primary-color-darker)
  }

  .btn-ghost {
    --btn-color: var(--btn-bg);
    --btn-border-color: var(--btn-bg);
    background: 0 0;
    transition: .3s;
  }

  .btn-ghost:hover {
    --btn-color:white;
    background: var(--btn-bg)
  }

  .btn:hover {
    background: transparent;
    box-shadow: 0 0 20px 10px rgba(51, 152, 219, 0.5);
  }

  .btn::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 500%;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    transform: translateX(-120%) translateY(-40%) rotate(30deg);
    transition: 0.6s;
  }

  .btn:hover::before {
    transform: translateX(120%) translateY(-40%) rotate(30deg);
  }
</style>
