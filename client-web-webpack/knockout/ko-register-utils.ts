import * as knockout from "knockout";

export class Utils {
  private static loadCss(content: string): void {
    var link = document.createElement("style");
    link.type = "text/css";
    link.innerHTML = content;
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  public static registerKOComponent(
    ko: typeof knockout,
    controlName: string,
    htmlTemplate: string,
    viewModel?: any
  ) {
    if (!ko.components.isRegistered(controlName)) {
      ko.components.register(controlName, {
        viewModel: {
          createViewModel: function(params: any, componentInfo: any) {
            let element = componentInfo.element as HTMLElement;
            if (element.classList) {
              element.classList.add(controlName);
            } else {
              element.className += " " + controlName;
            }

            if (viewModel != null) {
              return new viewModel(params);
            } else {
              return null;
            }
          }
        },
        template: htmlTemplate
      });
    }
  }
}
