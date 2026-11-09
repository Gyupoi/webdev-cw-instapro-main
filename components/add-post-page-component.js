import { renderUploadImageComponent } from "./upload-image-component.js";
import { POSTS_PAGE } from "../routes.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick, goToPage, }) {
  const render = () => {

    const appHtml = `
      <div class="page-container">
  <div class="header-container"></div>

  <div class="add-post-card">
    <h2 class="add-post-title">Новый пост</h2>

    <textarea
      class="post-description"
      placeholder="Добавьте описание поста..."
    ></textarea>

    <div class="upload-image-container"></div>

    <div class="add-post-buttons">
      <button class="secondary-button" id="cancel-button">
      Отмена
      </button>

      <button class="button" id="add-button">
      Опубликовать
      </button>
    </div>
</div>
    `;

    appEl.innerHTML = appHtml;

    let imageUrl = "";

    renderUploadImageComponent({
      element: document.querySelector(".upload-image-container"),
      onImageUrlChange: (url) => {
        imageUrl = url;
      },
    });


    document
      .getElementById("add-button")
      .addEventListener("click", () => {

        const description = document
          .querySelector(".post-description")
          .value;

        onAddPostClick({
          description,
          imageUrl,
        });

      });
        document
  .getElementById("cancel-button")
  .addEventListener("click", () => {
    goToPage(POSTS_PAGE);
  });
  
  };

  render();
}