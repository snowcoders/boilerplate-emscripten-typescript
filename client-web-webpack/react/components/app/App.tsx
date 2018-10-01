import * as React from "react";

// Store - We dynamically load this in the component did mount
import { ClientShared } from "client-shared-js";

// Styles
import "./App.scss";

interface AppProps {
}

interface AppState {
    currentString: string
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            currentString: "Mounting app..."
        };
    }

    componentDidMount() {
        const app = this;
        import("client-shared-js").then(foo => {
            if (foo != null) {
                this.setState({
                    currentString: "Running create instance..."
                });
            }
            foo.default({
                // Remember that the context here is the created module.
                // Further, this callback is called in the middle of construction, therefore
                // the variable shared is not ready.
                onRuntimeInitialized: function () {
                    app._setInstance(this);
                },
                locateFile: function (filename: string) {
                    if (filename === 'client-shared-js.mem') {
                        return "/node_modules/client-shared-js/ship/client-shared-js.mem"
                    }
                }
            });
        });
    }
    render() {
        return <h1 className="app">{this.state.currentString}</h1>;
    }

    _setInstance(instance: ClientShared) {
        let stringFactory = new instance.StringFactory();
        setInterval(() => {
            this.setState({
                currentString: stringFactory.getString()
            });
        }, 1000);
    }
}