#pragma once

namespace jnl {
    // Annotation used to mark C++ classes/structs for automatic export to Java.
    // Example usage: class [[jnl::java_export{}]] MyClass { ... };
    struct java_export {};
}
