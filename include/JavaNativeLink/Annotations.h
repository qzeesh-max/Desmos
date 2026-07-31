#pragma once

namespace jnl {
    // Annotation used to mark C++ classes/structs for automatic export to Java.
    // Example usage: class [[jnl::export_java{}]] MyClass { ... };
    struct export_java {};
}
