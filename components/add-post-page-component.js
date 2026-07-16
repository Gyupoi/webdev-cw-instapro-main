import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {

    const appHtml = `
      <div class="page-container">
        <div class="header-container"></div>

        <textarea 
          class="post-description"
          placeholder="Описание поста"
        ></textarea>

        <div class="upload-image-container"></div>

        <button class="button" id="add-button">
          Добавить
        </button>
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
  };

  render();
}