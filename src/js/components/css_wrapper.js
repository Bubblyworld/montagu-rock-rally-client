import React from 'react';
import classname from 'classname';

// Many components are simple div wrappers to decouple my logic and styling.
// This function abstracts this out.
export default function cssWrapper(containerClass, childClass) {
    return class extends React.Component {
        renderChild(child) {
            if (childClass) {
                return <div className={classname(childClass, child.props && child.props.className)}>
                    {child}
                </div>;
            } else return child;
        }

        render() {
            var contained;
            if (Array.isArray(this.props.children)) {
                contained = this.props.children.map(this.renderChild);
            } else {
                contained = this.props.children ? this.renderChild(this.props.children) : null;
            }

            return <div className={classname(containerClass, this.props.className)}>
                {contained}
            </div>;
        }
    }
}
