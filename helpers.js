export function saveUserToLocalStorage(user) {
  window.localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocalStorage(user) {
  try {
    return JSON.parse(window.localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}

export function removeUserFromLocalStorage(user) {
  window.localStorage.removeItem("user");
}

export function formatDate(date) {
  const diff = Date.now() - new Date(date).getTime();

  const minutes = Math.floor(diff / 60000);

  if (minutes < 1) {
    return "только что";
  }

  if (minutes < 60) {
    return `${minutes} минут назад`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} часов назад`;
  }

  const days = Math.floor(hours / 24);

  return `${days} дней назад`;
}